# `dataDatabricksPostgresBranch` Submodule <a name="`dataDatabricksPostgresBranch` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresBranch <a name="DataDatabricksPostgresBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch databricks_postgres_branch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

new dataDatabricksPostgresBranch.DataDatabricksPostgresBranch(scope: Construct, id: string, config: DataDatabricksPostgresBranchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig">DataDatabricksPostgresBranchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig">DataDatabricksPostgresBranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresBranchProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresBranch resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPostgresBranch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresBranch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.branchId">branchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference">DataDatabricksPostgresBranchProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference">DataDatabricksPostgresBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference">DataDatabricksPostgresBranchStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresBranchProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference">DataDatabricksPostgresBranchProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.spec"></a>

```typescript
public readonly spec: DataDatabricksPostgresBranchSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference">DataDatabricksPostgresBranchSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.status"></a>

```typescript
public readonly status: DataDatabricksPostgresBranchStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference">DataDatabricksPostgresBranchStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresBranchProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresBranchConfig <a name="DataDatabricksPostgresBranchConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

const dataDatabricksPostgresBranchConfig: dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresBranchProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}.

---

### DataDatabricksPostgresBranchProviderConfig <a name="DataDatabricksPostgresBranchProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

const dataDatabricksPostgresBranchProviderConfig: dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#workspace_id DataDatabricksPostgresBranch#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#workspace_id DataDatabricksPostgresBranch#workspace_id}.

---

### DataDatabricksPostgresBranchSpec <a name="DataDatabricksPostgresBranchSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

const dataDatabricksPostgresBranchSpec: dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.expireTime">expireTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#expire_time DataDatabricksPostgresBranch#expire_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.isProtected">isProtected</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#is_protected DataDatabricksPostgresBranch#is_protected}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.noExpiry">noExpiry</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#no_expiry DataDatabricksPostgresBranch#no_expiry}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranch">sourceBranch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch DataDatabricksPostgresBranch#source_branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_lsn DataDatabricksPostgresBranch#source_branch_lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchTime">sourceBranchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_time DataDatabricksPostgresBranch#source_branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.ttl">ttl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#ttl DataDatabricksPostgresBranch#ttl}. |

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#expire_time DataDatabricksPostgresBranch#expire_time}.

---

##### `isProtected`<sup>Optional</sup> <a name="isProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.isProtected"></a>

```typescript
public readonly isProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#is_protected DataDatabricksPostgresBranch#is_protected}.

---

##### `noExpiry`<sup>Optional</sup> <a name="noExpiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.noExpiry"></a>

```typescript
public readonly noExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#no_expiry DataDatabricksPostgresBranch#no_expiry}.

---

##### `sourceBranch`<sup>Optional</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranch"></a>

```typescript
public readonly sourceBranch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch DataDatabricksPostgresBranch#source_branch}.

---

##### `sourceBranchLsn`<sup>Optional</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchLsn"></a>

```typescript
public readonly sourceBranchLsn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_lsn DataDatabricksPostgresBranch#source_branch_lsn}.

---

##### `sourceBranchTime`<sup>Optional</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchTime"></a>

```typescript
public readonly sourceBranchTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_time DataDatabricksPostgresBranch#source_branch_time}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#ttl DataDatabricksPostgresBranch#ttl}.

---

### DataDatabricksPostgresBranchStatus <a name="DataDatabricksPostgresBranchStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus.Initializer"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

const dataDatabricksPostgresBranchStatus: dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresBranchProviderConfigOutputReference <a name="DataDatabricksPostgresBranchProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

new dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresBranchProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

---


### DataDatabricksPostgresBranchSpecOutputReference <a name="DataDatabricksPostgresBranchSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

new dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetIsProtected">resetIsProtected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetNoExpiry">resetNoExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranch">resetSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchLsn">resetSourceBranchLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchTime">resetSourceBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetExpireTime"></a>

```typescript
public resetExpireTime(): void
```

##### `resetIsProtected` <a name="resetIsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetIsProtected"></a>

```typescript
public resetIsProtected(): void
```

##### `resetNoExpiry` <a name="resetNoExpiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetNoExpiry"></a>

```typescript
public resetNoExpiry(): void
```

##### `resetSourceBranch` <a name="resetSourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranch"></a>

```typescript
public resetSourceBranch(): void
```

##### `resetSourceBranchLsn` <a name="resetSourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchLsn"></a>

```typescript
public resetSourceBranchLsn(): void
```

##### `resetSourceBranchTime` <a name="resetSourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchTime"></a>

```typescript
public resetSourceBranchTime(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtectedInput">isProtectedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiryInput">noExpiryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchInput">sourceBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsnInput">sourceBranchLsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTimeInput">sourceBranchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtected">isProtected</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiry">noExpiry</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranch">sourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTime">sourceBranchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec">DataDatabricksPostgresBranchSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `isProtectedInput`<sup>Optional</sup> <a name="isProtectedInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtectedInput"></a>

```typescript
public readonly isProtectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `noExpiryInput`<sup>Optional</sup> <a name="noExpiryInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiryInput"></a>

```typescript
public readonly noExpiryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceBranchInput`<sup>Optional</sup> <a name="sourceBranchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchInput"></a>

```typescript
public readonly sourceBranchInput: string;
```

- *Type:* string

---

##### `sourceBranchLsnInput`<sup>Optional</sup> <a name="sourceBranchLsnInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsnInput"></a>

```typescript
public readonly sourceBranchLsnInput: string;
```

- *Type:* string

---

##### `sourceBranchTimeInput`<sup>Optional</sup> <a name="sourceBranchTimeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTimeInput"></a>

```typescript
public readonly sourceBranchTimeInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtected"></a>

```typescript
public readonly isProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `noExpiry`<sup>Required</sup> <a name="noExpiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiry"></a>

```typescript
public readonly noExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranch"></a>

```typescript
public readonly sourceBranch: string;
```

- *Type:* string

---

##### `sourceBranchLsn`<sup>Required</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsn"></a>

```typescript
public readonly sourceBranchLsn: string;
```

- *Type:* string

---

##### `sourceBranchTime`<sup>Required</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTime"></a>

```typescript
public readonly sourceBranchTime: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresBranchSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec">DataDatabricksPostgresBranchSpec</a>

---


### DataDatabricksPostgresBranchStatusOutputReference <a name="DataDatabricksPostgresBranchStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresBranch } from '@cdktn/provider-databricks'

new dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.branchId">branchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.currentState">currentState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.default">default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.isProtected">isProtected</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.logicalSizeBytes">logicalSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.pendingState">pendingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.purgeTime">purgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranch">sourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchTime">sourceBranchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.stateChangeTime">stateChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus">DataDatabricksPostgresBranchStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

---

##### `currentState`<sup>Required</sup> <a name="currentState" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.currentState"></a>

```typescript
public readonly currentState: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.isProtected"></a>

```typescript
public readonly isProtected: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `logicalSizeBytes`<sup>Required</sup> <a name="logicalSizeBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.logicalSizeBytes"></a>

```typescript
public readonly logicalSizeBytes: number;
```

- *Type:* number

---

##### `pendingState`<sup>Required</sup> <a name="pendingState" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.pendingState"></a>

```typescript
public readonly pendingState: string;
```

- *Type:* string

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.purgeTime"></a>

```typescript
public readonly purgeTime: string;
```

- *Type:* string

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranch"></a>

```typescript
public readonly sourceBranch: string;
```

- *Type:* string

---

##### `sourceBranchLsn`<sup>Required</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchLsn"></a>

```typescript
public readonly sourceBranchLsn: string;
```

- *Type:* string

---

##### `sourceBranchTime`<sup>Required</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchTime"></a>

```typescript
public readonly sourceBranchTime: string;
```

- *Type:* string

---

##### `stateChangeTime`<sup>Required</sup> <a name="stateChangeTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.stateChangeTime"></a>

```typescript
public readonly stateChangeTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresBranchStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus">DataDatabricksPostgresBranchStatus</a>

---



