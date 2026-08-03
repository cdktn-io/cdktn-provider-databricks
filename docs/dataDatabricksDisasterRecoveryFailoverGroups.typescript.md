# `dataDatabricksDisasterRecoveryFailoverGroups` Submodule <a name="`dataDatabricksDisasterRecoveryFailoverGroups` Submodule" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDisasterRecoveryFailoverGroups <a name="DataDatabricksDisasterRecoveryFailoverGroups" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups databricks_disaster_recovery_failover_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups(scope: Construct, id: string, config: DataDatabricksDisasterRecoveryFailoverGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig">DataDatabricksDisasterRecoveryFailoverGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig">DataDatabricksDisasterRecoveryFailoverGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isConstruct"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformElement"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDisasterRecoveryFailoverGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDisasterRecoveryFailoverGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDisasterRecoveryFailoverGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.failoverGroups">failoverGroups</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `failoverGroups`<sup>Required</sup> <a name="failoverGroups" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.failoverGroups"></a>

```typescript
public readonly failoverGroups: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDisasterRecoveryFailoverGroupsConfig <a name="DataDatabricksDisasterRecoveryFailoverGroupsConfig" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

const dataDatabricksDisasterRecoveryFailoverGroupsConfig: dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#parent DataDatabricksDisasterRecoveryFailoverGroups#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#page_size DataDatabricksDisasterRecoveryFailoverGroups#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#parent DataDatabricksDisasterRecoveryFailoverGroups#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#page_size DataDatabricksDisasterRecoveryFailoverGroups#page_size}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

const dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups: dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

const dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets: dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.catalogs">catalogs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#catalogs DataDatabricksDisasterRecoveryFailoverGroups#catalogs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.dataReplicationWorkspaceSet">dataReplicationWorkspaceSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroups#data_replication_workspace_set}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.locationMappings">locationMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#location_mappings DataDatabricksDisasterRecoveryFailoverGroups#location_mappings}. |

---

##### `catalogs`<sup>Required</sup> <a name="catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.catalogs"></a>

```typescript
public readonly catalogs: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#catalogs DataDatabricksDisasterRecoveryFailoverGroups#catalogs}.

---

##### `dataReplicationWorkspaceSet`<sup>Required</sup> <a name="dataReplicationWorkspaceSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.dataReplicationWorkspaceSet"></a>

```typescript
public readonly dataReplicationWorkspaceSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroups#data_replication_workspace_set}.

---

##### `locationMappings`<sup>Optional</sup> <a name="locationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.locationMappings"></a>

```typescript
public readonly locationMappings: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#location_mappings DataDatabricksDisasterRecoveryFailoverGroups#location_mappings}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

const dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs: dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

const dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings: dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.uriByRegion">uriByRegion</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#uri_by_region DataDatabricksDisasterRecoveryFailoverGroups#uri_by_region}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

##### `uriByRegion`<sup>Required</sup> <a name="uriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.uriByRegion"></a>

```typescript
public readonly uriByRegion: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#uri_by_region DataDatabricksDisasterRecoveryFailoverGroups#uri_by_region}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

const dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion: dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#region DataDatabricksDisasterRecoveryFailoverGroups#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#uri DataDatabricksDisasterRecoveryFailoverGroups#uri}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#region DataDatabricksDisasterRecoveryFailoverGroups#region}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#uri DataDatabricksDisasterRecoveryFailoverGroups#uri}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

const dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets: dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.workspaceIds">workspaceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#workspace_ids DataDatabricksDisasterRecoveryFailoverGroups#workspace_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.replicateWorkspaceAssets">replicateWorkspaceAssets</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroups#replicate_workspace_assets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.stableUrlNames">stableUrlNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#stable_url_names DataDatabricksDisasterRecoveryFailoverGroups#stable_url_names}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

##### `workspaceIds`<sup>Required</sup> <a name="workspaceIds" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.workspaceIds"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#workspace_ids DataDatabricksDisasterRecoveryFailoverGroups#workspace_ids}.

---

##### `replicateWorkspaceAssets`<sup>Optional</sup> <a name="replicateWorkspaceAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.replicateWorkspaceAssets"></a>

```typescript
public readonly replicateWorkspaceAssets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroups#replicate_workspace_assets}.

---

##### `stableUrlNames`<sup>Optional</sup> <a name="stableUrlNames" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.stableUrlNames"></a>

```typescript
public readonly stableUrlNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#stable_url_names DataDatabricksDisasterRecoveryFailoverGroups#stable_url_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.get"></a>

```typescript
public get(index: number): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups</a>[]

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.effectivePrimaryRegion">effectivePrimaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.initialPrimaryRegion">initialPrimaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.replicationPoint">replicationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.unityCatalogAssets">unityCatalogAssets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.workspaceSets">workspaceSets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectivePrimaryRegion`<sup>Required</sup> <a name="effectivePrimaryRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.effectivePrimaryRegion"></a>

```typescript
public readonly effectivePrimaryRegion: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `initialPrimaryRegion`<sup>Required</sup> <a name="initialPrimaryRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.initialPrimaryRegion"></a>

```typescript
public readonly initialPrimaryRegion: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `replicationPoint`<sup>Required</sup> <a name="replicationPoint" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.replicationPoint"></a>

```typescript
public readonly replicationPoint: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `unityCatalogAssets`<sup>Required</sup> <a name="unityCatalogAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.unityCatalogAssets"></a>

```typescript
public readonly unityCatalogAssets: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workspaceSets`<sup>Required</sup> <a name="workspaceSets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.workspaceSets"></a>

```typescript
public readonly workspaceSets: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.get"></a>

```typescript
public get(index: number): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>[]

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.get"></a>

```typescript
public get(index: number): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>[]

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion">putUriByRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUriByRegion` <a name="putUriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion"></a>

```typescript
public putUriByRegion(value: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion">uriByRegion</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput">uriByRegionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriByRegion`<sup>Required</sup> <a name="uriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion"></a>

```typescript
public readonly uriByRegion: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `uriByRegionInput`<sup>Optional</sup> <a name="uriByRegionInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput"></a>

```typescript
public readonly uriByRegionInput: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.get"></a>

```typescript
public get(index: number): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putCatalogs">putCatalogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putLocationMappings">putLocationMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resetLocationMappings">resetLocationMappings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalogs` <a name="putCatalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putCatalogs"></a>

```typescript
public putCatalogs(value: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putCatalogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>[]

---

##### `putLocationMappings` <a name="putLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putLocationMappings"></a>

```typescript
public putLocationMappings(value: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putLocationMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>[]

---

##### `resetLocationMappings` <a name="resetLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resetLocationMappings"></a>

```typescript
public resetLocationMappings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogs">catalogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappings">locationMappings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogsInput">catalogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput">dataReplicationWorkspaceSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappingsInput">locationMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet">dataReplicationWorkspaceSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogs`<sup>Required</sup> <a name="catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogs"></a>

```typescript
public readonly catalogs: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList</a>

---

##### `locationMappings`<sup>Required</sup> <a name="locationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappings"></a>

```typescript
public readonly locationMappings: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList</a>

---

##### `catalogsInput`<sup>Optional</sup> <a name="catalogsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogsInput"></a>

```typescript
public readonly catalogsInput: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>[]

---

##### `dataReplicationWorkspaceSetInput`<sup>Optional</sup> <a name="dataReplicationWorkspaceSetInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput"></a>

```typescript
public readonly dataReplicationWorkspaceSetInput: string;
```

- *Type:* string

---

##### `locationMappingsInput`<sup>Optional</sup> <a name="locationMappingsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappingsInput"></a>

```typescript
public readonly locationMappingsInput: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>[]

---

##### `dataReplicationWorkspaceSet`<sup>Required</sup> <a name="dataReplicationWorkspaceSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet"></a>

```typescript
public readonly dataReplicationWorkspaceSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.get"></a>

```typescript
public get(index: number): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets</a>[]

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDisasterRecoveryFailoverGroups } from '@cdktn/provider-databricks'

new dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resetReplicateWorkspaceAssets">resetReplicateWorkspaceAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resetStableUrlNames">resetStableUrlNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplicateWorkspaceAssets` <a name="resetReplicateWorkspaceAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resetReplicateWorkspaceAssets"></a>

```typescript
public resetReplicateWorkspaceAssets(): void
```

##### `resetStableUrlNames` <a name="resetStableUrlNames" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resetStableUrlNames"></a>

```typescript
public resetStableUrlNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput">replicateWorkspaceAssetsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNamesInput">stableUrlNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIdsInput">workspaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssets">replicateWorkspaceAssets</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNames">stableUrlNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIds">workspaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `replicateWorkspaceAssetsInput`<sup>Optional</sup> <a name="replicateWorkspaceAssetsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput"></a>

```typescript
public readonly replicateWorkspaceAssetsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `stableUrlNamesInput`<sup>Optional</sup> <a name="stableUrlNamesInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNamesInput"></a>

```typescript
public readonly stableUrlNamesInput: string[];
```

- *Type:* string[]

---

##### `workspaceIdsInput`<sup>Optional</sup> <a name="workspaceIdsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIdsInput"></a>

```typescript
public readonly workspaceIdsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replicateWorkspaceAssets`<sup>Required</sup> <a name="replicateWorkspaceAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssets"></a>

```typescript
public readonly replicateWorkspaceAssets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `stableUrlNames`<sup>Required</sup> <a name="stableUrlNames" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNames"></a>

```typescript
public readonly stableUrlNames: string[];
```

- *Type:* string[]

---

##### `workspaceIds`<sup>Required</sup> <a name="workspaceIds" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIds"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets</a>

---



