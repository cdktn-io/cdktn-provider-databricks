# `dataDatabricksDatabaseInstances` Submodule <a name="`dataDatabricksDatabaseInstances` Submodule" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseInstances <a name="DataDatabricksDatabaseInstances" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances databricks_database_instances}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances(scope: Construct, id: string, config?: DataDatabricksDatabaseInstancesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig">DataDatabricksDatabaseInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig">DataDatabricksDatabaseInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksDatabaseInstancesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDatabaseInstances resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksDatabaseInstances resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDatabaseInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDatabaseInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.databaseInstances">databaseInstances</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList">DataDatabricksDatabaseInstancesDatabaseInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference">DataDatabricksDatabaseInstancesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `databaseInstances`<sup>Required</sup> <a name="databaseInstances" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.databaseInstances"></a>

```typescript
public readonly databaseInstances: DataDatabricksDatabaseInstancesDatabaseInstancesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList">DataDatabricksDatabaseInstancesDatabaseInstancesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDatabaseInstancesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference">DataDatabricksDatabaseInstancesProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksDatabaseInstancesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseInstancesConfig <a name="DataDatabricksDatabaseInstancesConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstancesConfig: dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#page_size DataDatabricksDatabaseInstances#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#provider_config DataDatabricksDatabaseInstances#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#page_size DataDatabricksDatabaseInstances#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDatabaseInstancesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#provider_config DataDatabricksDatabaseInstances#provider_config}.

---

### DataDatabricksDatabaseInstancesDatabaseInstances <a name="DataDatabricksDatabaseInstancesDatabaseInstances" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstancesDatabaseInstances: dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#provider_config DataDatabricksDatabaseInstances#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#provider_config DataDatabricksDatabaseInstances#provider_config}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs: dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.branchTime">branchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.lsn">lsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |

---

##### `branchTime`<sup>Optional</sup> <a name="branchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags <a name="DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstancesDatabaseInstancesCustomTags: dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags <a name="DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags: dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef <a name="DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef: dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.branchTime">branchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.lsn">lsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |

---

##### `branchTime`<sup>Optional</sup> <a name="branchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig <a name="DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig: dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}.

---

### DataDatabricksDatabaseInstancesProviderConfig <a name="DataDatabricksDatabaseInstancesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstancesProviderConfig: dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get"></a>

```typescript
public get(index: number): DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a>[]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetBranchTime">resetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetLsn">resetLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchTime` <a name="resetBranchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetBranchTime"></a>

```typescript
public resetBranchTime(): void
```

##### `resetLsn` <a name="resetLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetLsn"></a>

```typescript
public resetLsn(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.effectiveLsn">effectiveLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTimeInput">branchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsnInput">lsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTime">branchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsn">lsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveLsn`<sup>Required</sup> <a name="effectiveLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```typescript
public readonly effectiveLsn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `branchTimeInput`<sup>Optional</sup> <a name="branchTimeInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```typescript
public readonly branchTimeInput: string;
```

- *Type:* string

---

##### `lsnInput`<sup>Optional</sup> <a name="lsnInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsnInput"></a>

```typescript
public readonly lsnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `branchTime`<sup>Required</sup> <a name="branchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a>[]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a>[]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get"></a>

```typescript
public get(index: number): DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseInstancesDatabaseInstances[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a>[]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.capacity">capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.childInstanceRefs">childInstanceRefs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCapacity">effectiveCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCustomTags">effectiveCustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnablePgNativeLogin">effectiveEnablePgNativeLogin</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnableReadableSecondaries">effectiveEnableReadableSecondaries</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveNodeCount">effectiveNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveRetentionWindowInDays">effectiveRetentionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveStopped">effectiveStopped</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveUsagePolicyId">effectiveUsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.parentInstanceRef">parentInstanceRef</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.pgVersion">pgVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readOnlyDns">readOnlyDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readWriteDns">readWriteDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.retentionWindowInDays">retentionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.stopped">stopped</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

---

##### `childInstanceRefs`<sup>Required</sup> <a name="childInstanceRefs" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.childInstanceRefs"></a>

```typescript
public readonly childInstanceRefs: DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.customTags"></a>

```typescript
public readonly customTags: DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList</a>

---

##### `effectiveCapacity`<sup>Required</sup> <a name="effectiveCapacity" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCapacity"></a>

```typescript
public readonly effectiveCapacity: string;
```

- *Type:* string

---

##### `effectiveCustomTags`<sup>Required</sup> <a name="effectiveCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCustomTags"></a>

```typescript
public readonly effectiveCustomTags: DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList</a>

---

##### `effectiveEnablePgNativeLogin`<sup>Required</sup> <a name="effectiveEnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnablePgNativeLogin"></a>

```typescript
public readonly effectiveEnablePgNativeLogin: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveEnableReadableSecondaries`<sup>Required</sup> <a name="effectiveEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnableReadableSecondaries"></a>

```typescript
public readonly effectiveEnableReadableSecondaries: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveNodeCount`<sup>Required</sup> <a name="effectiveNodeCount" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveNodeCount"></a>

```typescript
public readonly effectiveNodeCount: number;
```

- *Type:* number

---

##### `effectiveRetentionWindowInDays`<sup>Required</sup> <a name="effectiveRetentionWindowInDays" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveRetentionWindowInDays"></a>

```typescript
public readonly effectiveRetentionWindowInDays: number;
```

- *Type:* number

---

##### `effectiveStopped`<sup>Required</sup> <a name="effectiveStopped" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveStopped"></a>

```typescript
public readonly effectiveStopped: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveUsagePolicyId`<sup>Required</sup> <a name="effectiveUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveUsagePolicyId"></a>

```typescript
public readonly effectiveUsagePolicyId: string;
```

- *Type:* string

---

##### `enablePgNativeLogin`<sup>Required</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enablePgNativeLogin"></a>

```typescript
public readonly enablePgNativeLogin: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `parentInstanceRef`<sup>Required</sup> <a name="parentInstanceRef" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.parentInstanceRef"></a>

```typescript
public readonly parentInstanceRef: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference</a>

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.pgVersion"></a>

```typescript
public readonly pgVersion: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference</a>

---

##### `readOnlyDns`<sup>Required</sup> <a name="readOnlyDns" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readOnlyDns"></a>

```typescript
public readonly readOnlyDns: string;
```

- *Type:* string

---

##### `readWriteDns`<sup>Required</sup> <a name="readWriteDns" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readWriteDns"></a>

```typescript
public readonly readWriteDns: string;
```

- *Type:* string

---

##### `retentionWindowInDays`<sup>Required</sup> <a name="retentionWindowInDays" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.retentionWindowInDays"></a>

```typescript
public readonly retentionWindowInDays: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stopped`<sup>Required</sup> <a name="stopped" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.stopped"></a>

```typescript
public readonly stopped: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `usagePolicyId`<sup>Required</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDatabaseInstancesDatabaseInstances;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetBranchTime">resetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetLsn">resetLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchTime` <a name="resetBranchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetBranchTime"></a>

```typescript
public resetBranchTime(): void
```

##### `resetLsn` <a name="resetLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetLsn"></a>

```typescript
public resetLsn(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.effectiveLsn">effectiveLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTimeInput">branchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsnInput">lsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTime">branchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsn">lsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveLsn`<sup>Required</sup> <a name="effectiveLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.effectiveLsn"></a>

```typescript
public readonly effectiveLsn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `branchTimeInput`<sup>Optional</sup> <a name="branchTimeInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTimeInput"></a>

```typescript
public readonly branchTimeInput: string;
```

- *Type:* string

---

##### `lsnInput`<sup>Optional</sup> <a name="lsnInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsnInput"></a>

```typescript
public readonly lsnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `branchTime`<sup>Required</sup> <a name="branchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a>

---


### DataDatabricksDatabaseInstancesProviderConfigOutputReference <a name="DataDatabricksDatabaseInstancesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstances } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseInstancesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a>

---



