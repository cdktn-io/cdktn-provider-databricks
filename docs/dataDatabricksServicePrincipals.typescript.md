# `dataDatabricksServicePrincipals` Submodule <a name="`dataDatabricksServicePrincipals` Submodule" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipals <a name="DataDatabricksServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals databricks_service_principals}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

new dataDatabricksServicePrincipals.DataDatabricksServicePrincipals(scope: Construct, id: string, config?: DataDatabricksServicePrincipalsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig">DataDatabricksServicePrincipalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig">DataDatabricksServicePrincipalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putServicePrincipals">putServicePrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApplicationIds">resetApplicationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetServicePrincipals">resetServicePrincipals</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksServicePrincipalsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

---

##### `putServicePrincipals` <a name="putServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putServicePrincipals"></a>

```typescript
public putServicePrincipals(value: IResolvable | DataDatabricksServicePrincipalsServicePrincipals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putServicePrincipals.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>[]

---

##### `resetApplicationIds` <a name="resetApplicationIds" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApplicationIds"></a>

```typescript
public resetApplicationIds(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetServicePrincipals` <a name="resetServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetServicePrincipals"></a>

```typescript
public resetServicePrincipals(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksServicePrincipals resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksServicePrincipals resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksServicePrincipals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksServicePrincipals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference">DataDatabricksServicePrincipalsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipals">servicePrincipals</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList">DataDatabricksServicePrincipalsServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIdsInput">applicationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipalsInput">servicePrincipalsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIds">applicationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksServicePrincipalsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference">DataDatabricksServicePrincipalsProviderConfigOutputReference</a>

---

##### `servicePrincipals`<sup>Required</sup> <a name="servicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipals"></a>

```typescript
public readonly servicePrincipals: DataDatabricksServicePrincipalsServicePrincipalsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList">DataDatabricksServicePrincipalsServicePrincipalsList</a>

---

##### `applicationIdsInput`<sup>Optional</sup> <a name="applicationIdsInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIdsInput"></a>

```typescript
public readonly applicationIdsInput: string[];
```

- *Type:* string[]

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: DataDatabricksServicePrincipalsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

---

##### `servicePrincipalsInput`<sup>Optional</sup> <a name="servicePrincipalsInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipalsInput"></a>

```typescript
public readonly servicePrincipalsInput: IResolvable | DataDatabricksServicePrincipalsServicePrincipals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>[]

---

##### `applicationIds`<sup>Required</sup> <a name="applicationIds" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIds"></a>

```typescript
public readonly applicationIds: string[];
```

- *Type:* string[]

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalsConfig <a name="DataDatabricksServicePrincipalsConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

const dataDatabricksServicePrincipalsConfig: dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.applicationIds">applicationIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.servicePrincipals">servicePrincipals</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>[]</code> | service_principals block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationIds`<sup>Optional</sup> <a name="applicationIds" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.applicationIds"></a>

```typescript
public readonly applicationIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksServicePrincipalsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#provider_config DataDatabricksServicePrincipals#provider_config}

---

##### `servicePrincipals`<sup>Optional</sup> <a name="servicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.servicePrincipals"></a>

```typescript
public readonly servicePrincipals: IResolvable | DataDatabricksServicePrincipalsServicePrincipals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>[]

service_principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#service_principals DataDatabricksServicePrincipals#service_principals}

---

### DataDatabricksServicePrincipalsProviderConfig <a name="DataDatabricksServicePrincipalsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

const dataDatabricksServicePrincipalsProviderConfig: dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#workspace_id DataDatabricksServicePrincipals#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#workspace_id DataDatabricksServicePrincipals#workspace_id}.

---

### DataDatabricksServicePrincipalsServicePrincipals <a name="DataDatabricksServicePrincipalsServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

const dataDatabricksServicePrincipalsServicePrincipals: dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.aclPrincipalId">aclPrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#acl_principal_id DataDatabricksServicePrincipals#acl_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#active DataDatabricksServicePrincipals#active}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#application_id DataDatabricksServicePrincipals#application_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#display_name DataDatabricksServicePrincipals#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#external_id DataDatabricksServicePrincipals#external_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.home">home</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#home DataDatabricksServicePrincipals#home}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.repos">repos</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#repos DataDatabricksServicePrincipals#repos}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.scimId">scimId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#scim_id DataDatabricksServicePrincipals#scim_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.spId">spId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#sp_id DataDatabricksServicePrincipals#sp_id}. |

---

##### `aclPrincipalId`<sup>Optional</sup> <a name="aclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.aclPrincipalId"></a>

```typescript
public readonly aclPrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#acl_principal_id DataDatabricksServicePrincipals#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#active DataDatabricksServicePrincipals#active}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#application_id DataDatabricksServicePrincipals#application_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#display_name DataDatabricksServicePrincipals#display_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#external_id DataDatabricksServicePrincipals#external_id}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.home"></a>

```typescript
public readonly home: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#home DataDatabricksServicePrincipals#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.repos"></a>

```typescript
public readonly repos: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#repos DataDatabricksServicePrincipals#repos}.

---

##### `scimId`<sup>Optional</sup> <a name="scimId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.scimId"></a>

```typescript
public readonly scimId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#scim_id DataDatabricksServicePrincipals#scim_id}.

---

##### `spId`<sup>Optional</sup> <a name="spId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.spId"></a>

```typescript
public readonly spId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/service_principals#sp_id DataDatabricksServicePrincipals#sp_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalsProviderConfigOutputReference <a name="DataDatabricksServicePrincipalsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

new dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksServicePrincipalsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

---


### DataDatabricksServicePrincipalsServicePrincipalsList <a name="DataDatabricksServicePrincipalsServicePrincipalsList" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

new dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.get"></a>

```typescript
public get(index: number): DataDatabricksServicePrincipalsServicePrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksServicePrincipalsServicePrincipals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>[]

---


### DataDatabricksServicePrincipalsServicePrincipalsOutputReference <a name="DataDatabricksServicePrincipalsServicePrincipalsOutputReference" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipals } from '@cdktn/provider-databricks'

new dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetAclPrincipalId">resetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetHome">resetHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetRepos">resetRepos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetScimId">resetScimId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetSpId">resetSpId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAclPrincipalId` <a name="resetAclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetAclPrincipalId"></a>

```typescript
public resetAclPrincipalId(): void
```

##### `resetActive` <a name="resetActive" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetHome` <a name="resetHome" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetHome"></a>

```typescript
public resetHome(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRepos` <a name="resetRepos" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetRepos"></a>

```typescript
public resetRepos(): void
```

##### `resetScimId` <a name="resetScimId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetScimId"></a>

```typescript
public resetScimId(): void
```

##### `resetSpId` <a name="resetSpId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetSpId"></a>

```typescript
public resetSpId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalIdInput">aclPrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.homeInput">homeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.reposInput">reposInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimIdInput">scimIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spIdInput">spIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalId">aclPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.home">home</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.repos">repos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimId">scimId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spId">spId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclPrincipalIdInput`<sup>Optional</sup> <a name="aclPrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalIdInput"></a>

```typescript
public readonly aclPrincipalIdInput: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `homeInput`<sup>Optional</sup> <a name="homeInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.homeInput"></a>

```typescript
public readonly homeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `reposInput`<sup>Optional</sup> <a name="reposInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.reposInput"></a>

```typescript
public readonly reposInput: string;
```

- *Type:* string

---

##### `scimIdInput`<sup>Optional</sup> <a name="scimIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimIdInput"></a>

```typescript
public readonly scimIdInput: string;
```

- *Type:* string

---

##### `spIdInput`<sup>Optional</sup> <a name="spIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spIdInput"></a>

```typescript
public readonly spIdInput: string;
```

- *Type:* string

---

##### `aclPrincipalId`<sup>Required</sup> <a name="aclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalId"></a>

```typescript
public readonly aclPrincipalId: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.home"></a>

```typescript
public readonly home: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repos`<sup>Required</sup> <a name="repos" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.repos"></a>

```typescript
public readonly repos: string;
```

- *Type:* string

---

##### `scimId`<sup>Required</sup> <a name="scimId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimId"></a>

```typescript
public readonly scimId: string;
```

- *Type:* string

---

##### `spId`<sup>Required</sup> <a name="spId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spId"></a>

```typescript
public readonly spId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksServicePrincipalsServicePrincipals;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>

---



