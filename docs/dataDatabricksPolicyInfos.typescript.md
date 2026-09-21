# `dataDatabricksPolicyInfos` Submodule <a name="`dataDatabricksPolicyInfos` Submodule" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPolicyInfos <a name="DataDatabricksPolicyInfos" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos databricks_policy_infos}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfos(scope: Construct, id: string, config: DataDatabricksPolicyInfosConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig">DataDatabricksPolicyInfosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig">DataDatabricksPolicyInfosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetIncludeInherited">resetIncludeInherited</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetMaxResults">resetMaxResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPolicyInfosProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig">DataDatabricksPolicyInfosProviderConfig</a>

---

##### `resetIncludeInherited` <a name="resetIncludeInherited" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetIncludeInherited"></a>

```typescript
public resetIncludeInherited(): void
```

##### `resetMaxResults` <a name="resetMaxResults" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetMaxResults"></a>

```typescript
public resetMaxResults(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPolicyInfos resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPolicyInfos resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPolicyInfos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPolicyInfos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPolicyInfos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList">DataDatabricksPolicyInfosPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference">DataDatabricksPolicyInfosProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInheritedInput">includeInheritedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResultsInput">maxResultsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullnameInput">onSecurableFullnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableTypeInput">onSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig">DataDatabricksPolicyInfosProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInherited">includeInherited</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResults">maxResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.policies"></a>

```typescript
public readonly policies: DataDatabricksPolicyInfosPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList">DataDatabricksPolicyInfosPoliciesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPolicyInfosProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference">DataDatabricksPolicyInfosProviderConfigOutputReference</a>

---

##### `includeInheritedInput`<sup>Optional</sup> <a name="includeInheritedInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInheritedInput"></a>

```typescript
public readonly includeInheritedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxResultsInput`<sup>Optional</sup> <a name="maxResultsInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResultsInput"></a>

```typescript
public readonly maxResultsInput: number;
```

- *Type:* number

---

##### `onSecurableFullnameInput`<sup>Optional</sup> <a name="onSecurableFullnameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullnameInput"></a>

```typescript
public readonly onSecurableFullnameInput: string;
```

- *Type:* string

---

##### `onSecurableTypeInput`<sup>Optional</sup> <a name="onSecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableTypeInput"></a>

```typescript
public readonly onSecurableTypeInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPolicyInfosProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig">DataDatabricksPolicyInfosProviderConfig</a>

---

##### `includeInherited`<sup>Required</sup> <a name="includeInherited" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInherited"></a>

```typescript
public readonly includeInherited: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxResults`<sup>Required</sup> <a name="maxResults" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResults"></a>

```typescript
public readonly maxResults: number;
```

- *Type:* number

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPolicyInfosConfig <a name="DataDatabricksPolicyInfosConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosConfig: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.includeInherited">includeInherited</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#include_inherited DataDatabricksPolicyInfos#include_inherited}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.maxResults">maxResults</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#max_results DataDatabricksPolicyInfos#max_results}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig">DataDatabricksPolicyInfosProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#provider_config DataDatabricksPolicyInfos#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}.

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}.

---

##### `includeInherited`<sup>Optional</sup> <a name="includeInherited" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.includeInherited"></a>

```typescript
public readonly includeInherited: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#include_inherited DataDatabricksPolicyInfos#include_inherited}.

---

##### `maxResults`<sup>Optional</sup> <a name="maxResults" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.maxResults"></a>

```typescript
public readonly maxResults: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#max_results DataDatabricksPolicyInfos#max_results}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPolicyInfosProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig">DataDatabricksPolicyInfosProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#provider_config DataDatabricksPolicyInfos#provider_config}.

---

### DataDatabricksPolicyInfosPolicies <a name="DataDatabricksPolicyInfosPolicies" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPolicies: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#name DataDatabricksPolicyInfos#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig">DataDatabricksPolicyInfosPoliciesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#provider_config DataDatabricksPolicyInfos#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#name DataDatabricksPolicyInfos#name}.

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}.

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPolicyInfosPoliciesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig">DataDatabricksPolicyInfosPoliciesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#provider_config DataDatabricksPolicyInfos#provider_config}.

---

### DataDatabricksPolicyInfosPoliciesColumnMask <a name="DataDatabricksPolicyInfosPoliciesColumnMask" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesColumnMask: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.onColumn">onColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#on_column DataDatabricksPolicyInfos#on_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.using">using</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}.

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.onColumn"></a>

```typescript
public readonly onColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#on_column DataDatabricksPolicyInfos#on_column}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.using"></a>

```typescript
public readonly using: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsing <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesColumnMaskUsing: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.constant">constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#function_arg_expression DataDatabricksPolicyInfos#function_arg_expression}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}.

---

##### `functionArgExpression`<sup>Optional</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.functionArgExpression"></a>

```typescript
public readonly functionArgExpression: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#function_arg_expression DataDatabricksPolicyInfos#function_arg_expression}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_introspection DataDatabricksPolicyInfos#tag_introspection}. |

---

##### `tagIntrospection`<sup>Optional</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression.property.tagIntrospection"></a>

```typescript
public readonly tagIntrospection: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_introspection DataDatabricksPolicyInfos#tag_introspection}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#column_tag_value DataDatabricksPolicyInfos#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_value DataDatabricksPolicyInfos#tag_value}. |

---

##### `columnTagValue`<sup>Optional</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```typescript
public readonly columnTagValue: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#column_tag_value DataDatabricksPolicyInfos#column_tag_value}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```typescript
public readonly tagValue: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_value DataDatabricksPolicyInfos#tag_value}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">columnAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#column_alias DataDatabricksPolicyInfos#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}. |

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```typescript
public readonly columnAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#column_alias DataDatabricksPolicyInfos#column_alias}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}.

---

### DataDatabricksPolicyInfosPoliciesDeny <a name="DataDatabricksPolicyInfosPoliciesDeny" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesDeny: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny.property.privileges">privileges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#privileges DataDatabricksPolicyInfos#privileges}. |

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#privileges DataDatabricksPolicyInfos#privileges}.

---

### DataDatabricksPolicyInfosPoliciesGrant <a name="DataDatabricksPolicyInfosPoliciesGrant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesGrant: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant.property.privileges">privileges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#privileges DataDatabricksPolicyInfos#privileges}. |

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#privileges DataDatabricksPolicyInfos#privileges}.

---

### DataDatabricksPolicyInfosPoliciesMatchColumns <a name="DataDatabricksPolicyInfosPoliciesMatchColumns" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesMatchColumns: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#condition DataDatabricksPolicyInfos#condition}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#condition DataDatabricksPolicyInfos#condition}.

---

### DataDatabricksPolicyInfosPoliciesProviderConfig <a name="DataDatabricksPolicyInfosPoliciesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesProviderConfig: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#workspace_id DataDatabricksPolicyInfos#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#workspace_id DataDatabricksPolicyInfos#workspace_id}.

---

### DataDatabricksPolicyInfosPoliciesRowFilter <a name="DataDatabricksPolicyInfosPoliciesRowFilter" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesRowFilter: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.using">using</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.using"></a>

```typescript
public readonly using: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsing <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesRowFilterUsing: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.constant">constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#function_arg_expression DataDatabricksPolicyInfos#function_arg_expression}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}.

---

##### `functionArgExpression`<sup>Optional</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.functionArgExpression"></a>

```typescript
public readonly functionArgExpression: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#function_arg_expression DataDatabricksPolicyInfos#function_arg_expression}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_introspection DataDatabricksPolicyInfos#tag_introspection}. |

---

##### `tagIntrospection`<sup>Optional</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression.property.tagIntrospection"></a>

```typescript
public readonly tagIntrospection: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_introspection DataDatabricksPolicyInfos#tag_introspection}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#column_tag_value DataDatabricksPolicyInfos#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_value DataDatabricksPolicyInfos#tag_value}. |

---

##### `columnTagValue`<sup>Optional</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```typescript
public readonly columnTagValue: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#column_tag_value DataDatabricksPolicyInfos#column_tag_value}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```typescript
public readonly tagValue: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_value DataDatabricksPolicyInfos#tag_value}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">columnAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#column_alias DataDatabricksPolicyInfos#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}. |

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```typescript
public readonly columnAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#column_alias DataDatabricksPolicyInfos#column_alias}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}.

---

### DataDatabricksPolicyInfosProviderConfig <a name="DataDatabricksPolicyInfosProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

const dataDatabricksPolicyInfosProviderConfig: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#workspace_id DataDatabricksPolicyInfos#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_infos#workspace_id DataDatabricksPolicyInfos#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing"></a>

```typescript
public putUsing(value: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

---

##### `resetUsing` <a name="resetUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.using">using</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList">DataDatabricksPolicyInfosPoliciesColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumnInput">onColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.usingInput">usingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumn">onColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.using"></a>

```typescript
public readonly using: DataDatabricksPolicyInfosPoliciesColumnMaskUsingList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList">DataDatabricksPolicyInfosPoliciesColumnMaskUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `onColumnInput`<sup>Optional</sup> <a name="onColumnInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumnInput"></a>

```typescript
public readonly onColumnInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumn"></a>

```typescript
public readonly onColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPolicyInfosPoliciesColumnMask;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a>

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection">putTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection">resetTagIntrospection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagIntrospection` <a name="putTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```typescript
public putTagIntrospection(value: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---

##### `resetTagIntrospection` <a name="resetTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```typescript
public resetTagIntrospection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">tagIntrospectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagIntrospection`<sup>Required</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```typescript
public readonly tagIntrospection: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `tagIntrospectionInput`<sup>Optional</sup> <a name="tagIntrospectionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```typescript
public readonly tagIntrospectionInput: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression</a>

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">columnAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">columnAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnAliasInput`<sup>Optional</sup> <a name="columnAliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```typescript
public readonly columnAliasInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```typescript
public readonly columnAlias: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">putColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">putTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">resetColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnTagValue` <a name="putColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```typescript
public putColumnTagValue(value: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `putTagValue` <a name="putTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```typescript
public putTagValue(value: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `resetColumnTagValue` <a name="resetColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```typescript
public resetColumnTagValue(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">columnTagValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnTagValue`<sup>Required</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```typescript
public readonly columnTagValue: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `columnTagValueInput`<sup>Optional</sup> <a name="columnTagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```typescript
public readonly columnTagValueInput: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingList <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.putFunctionArgExpression">putFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetFunctionArgExpression">resetFunctionArgExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctionArgExpression` <a name="putFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.putFunctionArgExpression"></a>

```typescript
public putFunctionArgExpression(value: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.putFunctionArgExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConstant` <a name="resetConstant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```

##### `resetFunctionArgExpression` <a name="resetFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetFunctionArgExpression"></a>

```typescript
public resetFunctionArgExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.functionArgExpressionInput">functionArgExpressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionArgExpression`<sup>Required</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.functionArgExpression"></a>

```typescript
public readonly functionArgExpression: DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `functionArgExpressionInput`<sup>Optional</sup> <a name="functionArgExpressionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.functionArgExpressionInput"></a>

```typescript
public readonly functionArgExpressionInput: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsing;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>

---


### DataDatabricksPolicyInfosPoliciesDenyOutputReference <a name="DataDatabricksPolicyInfosPoliciesDenyOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.privilegesInput">privilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.privileges">privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny">DataDatabricksPolicyInfosPoliciesDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.privilegesInput"></a>

```typescript
public readonly privilegesInput: string[];
```

- *Type:* string[]

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPolicyInfosPoliciesDeny;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny">DataDatabricksPolicyInfosPoliciesDeny</a>

---


### DataDatabricksPolicyInfosPoliciesGrantOutputReference <a name="DataDatabricksPolicyInfosPoliciesGrantOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.privilegesInput">privilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.privileges">privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant">DataDatabricksPolicyInfosPoliciesGrant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.privilegesInput"></a>

```typescript
public readonly privilegesInput: string[];
```

- *Type:* string[]

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPolicyInfosPoliciesGrant;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant">DataDatabricksPolicyInfosPoliciesGrant</a>

---


### DataDatabricksPolicyInfosPoliciesList <a name="DataDatabricksPolicyInfosPoliciesList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfosPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a>[]

---


### DataDatabricksPolicyInfosPoliciesMatchColumnsList <a name="DataDatabricksPolicyInfosPoliciesMatchColumnsList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesMatchColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]

---


### DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference <a name="DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPolicyInfosPoliciesMatchColumns;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>

---


### DataDatabricksPolicyInfosPoliciesOutputReference <a name="DataDatabricksPolicyInfosPoliciesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPolicyInfosPoliciesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig">DataDatabricksPolicyInfosPoliciesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.columnMask">columnMask</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference">DataDatabricksPolicyInfosPoliciesDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.exceptPrincipals">exceptPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.forSecurableType">forSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.grant">grant</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference">DataDatabricksPolicyInfosPoliciesGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.matchColumns">matchColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList">DataDatabricksPolicyInfosPoliciesMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference">DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.toPrincipals">toPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.whenCondition">whenCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullnameInput">onSecurableFullnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableTypeInput">onSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig">DataDatabricksPolicyInfosPoliciesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnMask`<sup>Required</sup> <a name="columnMask" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.columnMask"></a>

```typescript
public readonly columnMask: DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.deny"></a>

```typescript
public readonly deny: DataDatabricksPolicyInfosPoliciesDenyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference">DataDatabricksPolicyInfosPoliciesDenyOutputReference</a>

---

##### `exceptPrincipals`<sup>Required</sup> <a name="exceptPrincipals" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.exceptPrincipals"></a>

```typescript
public readonly exceptPrincipals: string[];
```

- *Type:* string[]

---

##### `forSecurableType`<sup>Required</sup> <a name="forSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.forSecurableType"></a>

```typescript
public readonly forSecurableType: string;
```

- *Type:* string

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.grant"></a>

```typescript
public readonly grant: DataDatabricksPolicyInfosPoliciesGrantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference">DataDatabricksPolicyInfosPoliciesGrantOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchColumns`<sup>Required</sup> <a name="matchColumns" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.matchColumns"></a>

```typescript
public readonly matchColumns: DataDatabricksPolicyInfosPoliciesMatchColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList">DataDatabricksPolicyInfosPoliciesMatchColumnsList</a>

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference">DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference</a>

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.rowFilter"></a>

```typescript
public readonly rowFilter: DataDatabricksPolicyInfosPoliciesRowFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterOutputReference</a>

---

##### `toPrincipals`<sup>Required</sup> <a name="toPrincipals" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.toPrincipals"></a>

```typescript
public readonly toPrincipals: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `whenCondition`<sup>Required</sup> <a name="whenCondition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.whenCondition"></a>

```typescript
public readonly whenCondition: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onSecurableFullnameInput`<sup>Optional</sup> <a name="onSecurableFullnameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullnameInput"></a>

```typescript
public readonly onSecurableFullnameInput: string;
```

- *Type:* string

---

##### `onSecurableTypeInput`<sup>Optional</sup> <a name="onSecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableTypeInput"></a>

```typescript
public readonly onSecurableTypeInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPolicyInfosPoliciesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig">DataDatabricksPolicyInfosPoliciesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPolicyInfosPolicies;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a>

---


### DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference <a name="DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig">DataDatabricksPolicyInfosPoliciesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig">DataDatabricksPolicyInfosPoliciesProviderConfig</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing"></a>

```typescript
public putUsing(value: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

---

##### `resetUsing` <a name="resetUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.using">using</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList">DataDatabricksPolicyInfosPoliciesRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.usingInput">usingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.using"></a>

```typescript
public readonly using: DataDatabricksPolicyInfosPoliciesRowFilterUsingList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList">DataDatabricksPolicyInfosPoliciesRowFilterUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPolicyInfosPoliciesRowFilter;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection">putTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection">resetTagIntrospection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagIntrospection` <a name="putTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```typescript
public putTagIntrospection(value: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---

##### `resetTagIntrospection` <a name="resetTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```typescript
public resetTagIntrospection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">tagIntrospectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagIntrospection`<sup>Required</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```typescript
public readonly tagIntrospection: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `tagIntrospectionInput`<sup>Optional</sup> <a name="tagIntrospectionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```typescript
public readonly tagIntrospectionInput: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">columnAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">columnAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnAliasInput`<sup>Optional</sup> <a name="columnAliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```typescript
public readonly columnAliasInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```typescript
public readonly columnAlias: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">putColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">putTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">resetColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnTagValue` <a name="putColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```typescript
public putColumnTagValue(value: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `putTagValue` <a name="putTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```typescript
public putTagValue(value: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `resetColumnTagValue` <a name="resetColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```typescript
public resetColumnTagValue(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">columnTagValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnTagValue`<sup>Required</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```typescript
public readonly columnTagValue: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `columnTagValueInput`<sup>Optional</sup> <a name="columnTagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```typescript
public readonly columnTagValueInput: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingList <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.putFunctionArgExpression">putFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetFunctionArgExpression">resetFunctionArgExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctionArgExpression` <a name="putFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.putFunctionArgExpression"></a>

```typescript
public putFunctionArgExpression(value: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.putFunctionArgExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConstant` <a name="resetConstant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```

##### `resetFunctionArgExpression` <a name="resetFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetFunctionArgExpression"></a>

```typescript
public resetFunctionArgExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.functionArgExpressionInput">functionArgExpressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionArgExpression`<sup>Required</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.functionArgExpression"></a>

```typescript
public readonly functionArgExpression: DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `functionArgExpressionInput`<sup>Optional</sup> <a name="functionArgExpressionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.functionArgExpressionInput"></a>

```typescript
public readonly functionArgExpressionInput: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsing;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>

---


### DataDatabricksPolicyInfosProviderConfigOutputReference <a name="DataDatabricksPolicyInfosProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktn/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig">DataDatabricksPolicyInfosProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig">DataDatabricksPolicyInfosProviderConfig</a>

---



