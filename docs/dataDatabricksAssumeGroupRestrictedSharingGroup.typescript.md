# `dataDatabricksAssumeGroupRestrictedSharingGroup` Submodule <a name="`dataDatabricksAssumeGroupRestrictedSharingGroup` Submodule" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroup <a name="DataDatabricksAssumeGroupRestrictedSharingGroup" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_group databricks_assume_group_restricted_sharing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

new dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup(scope: Construct, id: string, config: DataDatabricksAssumeGroupRestrictedSharingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig">DataDatabricksAssumeGroupRestrictedSharingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig">DataDatabricksAssumeGroupRestrictedSharingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isConstruct"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformElement"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAssumeGroupRestrictedSharingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAssumeGroupRestrictedSharingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAssumeGroupRestrictedSharingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.groupDisplayName">groupDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId">restrictedSharingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `groupDisplayName`<sup>Required</sup> <a name="groupDisplayName" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.groupDisplayName"></a>

```typescript
public readonly groupDisplayName: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a>

---

##### `restrictedSharingGroupId`<sup>Required</sup> <a name="restrictedSharingGroupId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId"></a>

```typescript
public readonly restrictedSharingGroupId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

const dataDatabricksAssumeGroupRestrictedSharingGroupConfig: dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_group#name DataDatabricksAssumeGroupRestrictedSharingGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_group#provider_config DataDatabricksAssumeGroupRestrictedSharingGroup#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_group#name DataDatabricksAssumeGroupRestrictedSharingGroup#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_group#provider_config DataDatabricksAssumeGroupRestrictedSharingGroup#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

const dataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig: dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_group#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroup#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.144.0/docs/data-sources/assume_group_restricted_sharing_group#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroup#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

new dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

---



