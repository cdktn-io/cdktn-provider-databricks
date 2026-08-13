# `dataDatabricksAiGatewayModelService` Submodule <a name="`dataDatabricksAiGatewayModelService` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiGatewayModelService <a name="DataDatabricksAiGatewayModelService" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service databricks_ai_gateway_model_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService(scope: Construct, id: string, config: DataDatabricksAiGatewayModelServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig">DataDatabricksAiGatewayModelServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig">DataDatabricksAiGatewayModelServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAiGatewayModelServiceProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig">DataDatabricksAiGatewayModelServiceProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiGatewayModelService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isConstruct"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isTerraformElement"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.generateConfigForImport"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAiGatewayModelService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAiGatewayModelService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAiGatewayModelService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiGatewayModelService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.browseOnly">browseOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference">DataDatabricksAiGatewayModelServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.effectiveOwner">effectiveOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference">DataDatabricksAiGatewayModelServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.supportedApiTypes">supportedApiTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig">DataDatabricksAiGatewayModelServiceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.browseOnly"></a>

```typescript
public readonly browseOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.config"></a>

```typescript
public readonly config: DataDatabricksAiGatewayModelServiceConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference">DataDatabricksAiGatewayModelServiceConfigAOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveOwner`<sup>Required</sup> <a name="effectiveOwner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.effectiveOwner"></a>

```typescript
public readonly effectiveOwner: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiGatewayModelServiceProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference">DataDatabricksAiGatewayModelServiceProviderConfigOutputReference</a>

---

##### `supportedApiTypes`<sup>Required</sup> <a name="supportedApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.supportedApiTypes"></a>

```typescript
public readonly supportedApiTypes: string[];
```

- *Type:* string[]

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAiGatewayModelServiceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig">DataDatabricksAiGatewayModelServiceProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiGatewayModelServiceConfig <a name="DataDatabricksAiGatewayModelServiceConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfig: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#name DataDatabricksAiGatewayModelService#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig">DataDatabricksAiGatewayModelServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#provider_config DataDatabricksAiGatewayModelService#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#name DataDatabricksAiGatewayModelService#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiGatewayModelServiceProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig">DataDatabricksAiGatewayModelServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#provider_config DataDatabricksAiGatewayModelService#provider_config}.

---

### DataDatabricksAiGatewayModelServiceConfigA <a name="DataDatabricksAiGatewayModelServiceConfigA" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigA: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA.property.inferenceTable">inferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable">DataDatabricksAiGatewayModelServiceConfigInferenceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#inference_table DataDatabricksAiGatewayModelService#inference_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA.property.rateLimits">rateLimits</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits">DataDatabricksAiGatewayModelServiceConfigRateLimits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#rate_limits DataDatabricksAiGatewayModelService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting">DataDatabricksAiGatewayModelServiceConfigRouting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#routing DataDatabricksAiGatewayModelService#routing}. |

---

##### `inferenceTable`<sup>Optional</sup> <a name="inferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA.property.inferenceTable"></a>

```typescript
public readonly inferenceTable: DataDatabricksAiGatewayModelServiceConfigInferenceTable;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable">DataDatabricksAiGatewayModelServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#inference_table DataDatabricksAiGatewayModelService#inference_table}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA.property.rateLimits"></a>

```typescript
public readonly rateLimits: IResolvable | DataDatabricksAiGatewayModelServiceConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits">DataDatabricksAiGatewayModelServiceConfigRateLimits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#rate_limits DataDatabricksAiGatewayModelService#rate_limits}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA.property.routing"></a>

```typescript
public readonly routing: DataDatabricksAiGatewayModelServiceConfigRouting;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting">DataDatabricksAiGatewayModelServiceConfigRouting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#routing DataDatabricksAiGatewayModelService#routing}.

---

### DataDatabricksAiGatewayModelServiceConfigInferenceTable <a name="DataDatabricksAiGatewayModelServiceConfigInferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigInferenceTable: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#parent DataDatabricksAiGatewayModelService#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#disabled DataDatabricksAiGatewayModelService#disabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#table_name_prefix DataDatabricksAiGatewayModelService#table_name_prefix}. |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#parent DataDatabricksAiGatewayModelService#parent}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#disabled DataDatabricksAiGatewayModelService#disabled}.

---

##### `tableNamePrefix`<sup>Optional</sup> <a name="tableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#table_name_prefix DataDatabricksAiGatewayModelService#table_name_prefix}.

---

### DataDatabricksAiGatewayModelServiceConfigRateLimits <a name="DataDatabricksAiGatewayModelServiceConfigRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRateLimits: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#key DataDatabricksAiGatewayModelService#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#renewal_period DataDatabricksAiGatewayModelService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#principal DataDatabricksAiGatewayModelService#principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.requests">requests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#requests DataDatabricksAiGatewayModelService#requests}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.requestTagKey">requestTagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#request_tag_key DataDatabricksAiGatewayModelService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.requestTagValue">requestTagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#request_tag_value DataDatabricksAiGatewayModelService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.tokens">tokens</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#tokens DataDatabricksAiGatewayModelService#tokens}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#key DataDatabricksAiGatewayModelService#key}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#renewal_period DataDatabricksAiGatewayModelService#renewal_period}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#principal DataDatabricksAiGatewayModelService#principal}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#requests DataDatabricksAiGatewayModelService#requests}.

---

##### `requestTagKey`<sup>Optional</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.requestTagKey"></a>

```typescript
public readonly requestTagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#request_tag_key DataDatabricksAiGatewayModelService#request_tag_key}.

---

##### `requestTagValue`<sup>Optional</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.requestTagValue"></a>

```typescript
public readonly requestTagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#request_tag_value DataDatabricksAiGatewayModelService#request_tag_value}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#tokens DataDatabricksAiGatewayModelService#tokens}.

---

### DataDatabricksAiGatewayModelServiceConfigRouting <a name="DataDatabricksAiGatewayModelServiceConfigRouting" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRouting: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#destinations DataDatabricksAiGatewayModelService#destinations}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback">DataDatabricksAiGatewayModelServiceConfigRoutingFallback</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#fallback DataDatabricksAiGatewayModelService#fallback}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting.property.firstTokenTimeout">firstTokenTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#first_token_timeout DataDatabricksAiGatewayModelService#first_token_timeout}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting.property.trafficSplitting">trafficSplitting</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting">DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#traffic_splitting DataDatabricksAiGatewayModelService#traffic_splitting}. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#destinations DataDatabricksAiGatewayModelService#destinations}.

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting.property.fallback"></a>

```typescript
public readonly fallback: DataDatabricksAiGatewayModelServiceConfigRoutingFallback;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback">DataDatabricksAiGatewayModelServiceConfigRoutingFallback</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#fallback DataDatabricksAiGatewayModelService#fallback}.

---

##### `firstTokenTimeout`<sup>Optional</sup> <a name="firstTokenTimeout" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting.property.firstTokenTimeout"></a>

```typescript
public readonly firstTokenTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#first_token_timeout DataDatabricksAiGatewayModelService#first_token_timeout}.

---

##### `trafficSplitting`<sup>Optional</sup> <a name="trafficSplitting" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting.property.trafficSplitting"></a>

```typescript
public readonly trafficSplitting: DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting">DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#traffic_splitting DataDatabricksAiGatewayModelService#traffic_splitting}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingDestinations <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinations" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingDestinations: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#destination_type DataDatabricksAiGatewayModelService#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#name DataDatabricksAiGatewayModelService#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.externalModelConfig">externalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#external_model_config DataDatabricksAiGatewayModelService#external_model_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.payPerTokenConfig">payPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#pay_per_token_config DataDatabricksAiGatewayModelService#pay_per_token_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.provisionedThroughputConfig">provisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#provisioned_throughput_config DataDatabricksAiGatewayModelService#provisioned_throughput_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#traffic_percentage DataDatabricksAiGatewayModelService#traffic_percentage}. |

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#destination_type DataDatabricksAiGatewayModelService#destination_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#name DataDatabricksAiGatewayModelService#name}.

---

##### `externalModelConfig`<sup>Optional</sup> <a name="externalModelConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.externalModelConfig"></a>

```typescript
public readonly externalModelConfig: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#external_model_config DataDatabricksAiGatewayModelService#external_model_config}.

---

##### `payPerTokenConfig`<sup>Optional</sup> <a name="payPerTokenConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.payPerTokenConfig"></a>

```typescript
public readonly payPerTokenConfig: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#pay_per_token_config DataDatabricksAiGatewayModelService#pay_per_token_config}.

---

##### `provisionedThroughputConfig`<sup>Optional</sup> <a name="provisionedThroughputConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.provisionedThroughputConfig"></a>

```typescript
public readonly provisionedThroughputConfig: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#provisioned_throughput_config DataDatabricksAiGatewayModelService#provisioned_throughput_config}.

---

##### `trafficPercentage`<sup>Optional</sup> <a name="trafficPercentage" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#traffic_percentage DataDatabricksAiGatewayModelService#traffic_percentage}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.modelProviderService">modelProviderService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model_provider_service DataDatabricksAiGatewayModelService#model_provider_service}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#target DataDatabricksAiGatewayModelService#target}. |

---

##### `modelProviderService`<sup>Required</sup> <a name="modelProviderService" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.modelProviderService"></a>

```typescript
public readonly modelProviderService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model_provider_service DataDatabricksAiGatewayModelService#model_provider_service}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.target"></a>

```typescript
public readonly target: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#target DataDatabricksAiGatewayModelService#target}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.nativeApiTypes">nativeApiTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#native_api_types DataDatabricksAiGatewayModelService#native_api_types}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}.

---

##### `nativeApiTypes`<sup>Optional</sup> <a name="nativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.nativeApiTypes"></a>

```typescript
public readonly nativeApiTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#native_api_types DataDatabricksAiGatewayModelService#native_api_types}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig.property.modelServingEndpoint">modelServingEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model_serving_endpoint DataDatabricksAiGatewayModelService#model_serving_endpoint}. |

---

##### `modelServingEndpoint`<sup>Required</sup> <a name="modelServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig.property.modelServingEndpoint"></a>

```typescript
public readonly modelServingEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model_serving_endpoint DataDatabricksAiGatewayModelService#model_serving_endpoint}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingFallback <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallback" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingFallback: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#destinations DataDatabricksAiGatewayModelService#destinations}. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#destinations DataDatabricksAiGatewayModelService#destinations}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#destination_type DataDatabricksAiGatewayModelService#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#name DataDatabricksAiGatewayModelService#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.externalModelConfig">externalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#external_model_config DataDatabricksAiGatewayModelService#external_model_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.payPerTokenConfig">payPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#pay_per_token_config DataDatabricksAiGatewayModelService#pay_per_token_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.provisionedThroughputConfig">provisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#provisioned_throughput_config DataDatabricksAiGatewayModelService#provisioned_throughput_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#traffic_percentage DataDatabricksAiGatewayModelService#traffic_percentage}. |

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#destination_type DataDatabricksAiGatewayModelService#destination_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#name DataDatabricksAiGatewayModelService#name}.

---

##### `externalModelConfig`<sup>Optional</sup> <a name="externalModelConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.externalModelConfig"></a>

```typescript
public readonly externalModelConfig: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#external_model_config DataDatabricksAiGatewayModelService#external_model_config}.

---

##### `payPerTokenConfig`<sup>Optional</sup> <a name="payPerTokenConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.payPerTokenConfig"></a>

```typescript
public readonly payPerTokenConfig: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#pay_per_token_config DataDatabricksAiGatewayModelService#pay_per_token_config}.

---

##### `provisionedThroughputConfig`<sup>Optional</sup> <a name="provisionedThroughputConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.provisionedThroughputConfig"></a>

```typescript
public readonly provisionedThroughputConfig: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#provisioned_throughput_config DataDatabricksAiGatewayModelService#provisioned_throughput_config}.

---

##### `trafficPercentage`<sup>Optional</sup> <a name="trafficPercentage" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#traffic_percentage DataDatabricksAiGatewayModelService#traffic_percentage}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.modelProviderService">modelProviderService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model_provider_service DataDatabricksAiGatewayModelService#model_provider_service}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#target DataDatabricksAiGatewayModelService#target}. |

---

##### `modelProviderService`<sup>Required</sup> <a name="modelProviderService" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.modelProviderService"></a>

```typescript
public readonly modelProviderService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model_provider_service DataDatabricksAiGatewayModelService#model_provider_service}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.target"></a>

```typescript
public readonly target: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#target DataDatabricksAiGatewayModelService#target}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.nativeApiTypes">nativeApiTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#native_api_types DataDatabricksAiGatewayModelService#native_api_types}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}.

---

##### `nativeApiTypes`<sup>Optional</sup> <a name="nativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.nativeApiTypes"></a>

```typescript
public readonly nativeApiTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#native_api_types DataDatabricksAiGatewayModelService#native_api_types}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model DataDatabricksAiGatewayModelService#model}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig.property.modelServingEndpoint">modelServingEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model_serving_endpoint DataDatabricksAiGatewayModelService#model_serving_endpoint}. |

---

##### `modelServingEndpoint`<sup>Required</sup> <a name="modelServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig.property.modelServingEndpoint"></a>

```typescript
public readonly modelServingEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#model_serving_endpoint DataDatabricksAiGatewayModelService#model_serving_endpoint}.

---

### DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting <a name="DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting = { ... }
```


### DataDatabricksAiGatewayModelServiceProviderConfig <a name="DataDatabricksAiGatewayModelServiceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayModelServiceProviderConfig: dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#workspace_id DataDatabricksAiGatewayModelService#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_gateway_model_service#workspace_id DataDatabricksAiGatewayModelService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiGatewayModelServiceConfigAOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigAOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.putInferenceTable">putInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.resetInferenceTable">resetInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.resetRouting">resetRouting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInferenceTable` <a name="putInferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.putInferenceTable"></a>

```typescript
public putInferenceTable(value: DataDatabricksAiGatewayModelServiceConfigInferenceTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.putInferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable">DataDatabricksAiGatewayModelServiceConfigInferenceTable</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.putRateLimits"></a>

```typescript
public putRateLimits(value: IResolvable | DataDatabricksAiGatewayModelServiceConfigRateLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits">DataDatabricksAiGatewayModelServiceConfigRateLimits</a>[]

---

##### `putRouting` <a name="putRouting" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.putRouting"></a>

```typescript
public putRouting(value: DataDatabricksAiGatewayModelServiceConfigRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting">DataDatabricksAiGatewayModelServiceConfigRouting</a>

---

##### `resetInferenceTable` <a name="resetInferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.resetInferenceTable"></a>

```typescript
public resetInferenceTable(): void
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.resetRateLimits"></a>

```typescript
public resetRateLimits(): void
```

##### `resetRouting` <a name="resetRouting" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.resetRouting"></a>

```typescript
public resetRouting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.inferenceTable">inferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference">DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList">DataDatabricksAiGatewayModelServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.inferenceTableInput">inferenceTableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable">DataDatabricksAiGatewayModelServiceConfigInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.rateLimitsInput">rateLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits">DataDatabricksAiGatewayModelServiceConfigRateLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.routingInput">routingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting">DataDatabricksAiGatewayModelServiceConfigRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA">DataDatabricksAiGatewayModelServiceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inferenceTable`<sup>Required</sup> <a name="inferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.inferenceTable"></a>

```typescript
public readonly inferenceTable: DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference">DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.rateLimits"></a>

```typescript
public readonly rateLimits: DataDatabricksAiGatewayModelServiceConfigRateLimitsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList">DataDatabricksAiGatewayModelServiceConfigRateLimitsList</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.routing"></a>

```typescript
public readonly routing: DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference</a>

---

##### `inferenceTableInput`<sup>Optional</sup> <a name="inferenceTableInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.inferenceTableInput"></a>

```typescript
public readonly inferenceTableInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigInferenceTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable">DataDatabricksAiGatewayModelServiceConfigInferenceTable</a>

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.rateLimitsInput"></a>

```typescript
public readonly rateLimitsInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits">DataDatabricksAiGatewayModelServiceConfigRateLimits</a>[]

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.routingInput"></a>

```typescript
public readonly routingInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRouting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting">DataDatabricksAiGatewayModelServiceConfigRouting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiGatewayModelServiceConfigA;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigA">DataDatabricksAiGatewayModelServiceConfigA</a>

---


### DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.resetTableNamePrefix">resetTableNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetTableNamePrefix` <a name="resetTableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.resetTableNamePrefix"></a>

```typescript
public resetTableNamePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable">DataDatabricksAiGatewayModelServiceConfigInferenceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput"></a>

```typescript
public readonly tableNamePrefixInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigInferenceTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigInferenceTable">DataDatabricksAiGatewayModelServiceConfigInferenceTable</a>

---


### DataDatabricksAiGatewayModelServiceConfigRateLimitsList <a name="DataDatabricksAiGatewayModelServiceConfigRateLimitsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits">DataDatabricksAiGatewayModelServiceConfigRateLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits">DataDatabricksAiGatewayModelServiceConfigRateLimits</a>[]

---


### DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagKey">resetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagValue">resetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resetTokens">resetTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```

##### `resetRequestTagKey` <a name="resetRequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```typescript
public resetRequestTagKey(): void
```

##### `resetRequestTagValue` <a name="resetRequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```typescript
public resetRequestTagValue(): void
```

##### `resetTokens` <a name="resetTokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.resetTokens"></a>

```typescript
public resetTokens(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requestsInput">requestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">requestTagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValueInput">requestTagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.tokensInput">tokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requests">requests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKey">requestTagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValue">requestTagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits">DataDatabricksAiGatewayModelServiceConfigRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```typescript
public readonly renewalPeriodInput: string;
```

- *Type:* string

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: number;
```

- *Type:* number

---

##### `requestTagKeyInput`<sup>Optional</sup> <a name="requestTagKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```typescript
public readonly requestTagKeyInput: string;
```

- *Type:* string

---

##### `requestTagValueInput`<sup>Optional</sup> <a name="requestTagValueInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```typescript
public readonly requestTagValueInput: string;
```

- *Type:* string

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```typescript
public readonly tokensInput: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

---

##### `requestTagKey`<sup>Required</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```typescript
public readonly requestTagKey: string;
```

- *Type:* string

---

##### `requestTagValue`<sup>Required</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```typescript
public readonly requestTagValue: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRateLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRateLimits">DataDatabricksAiGatewayModelServiceConfigRateLimits</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.putTarget">putTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.putTarget"></a>

```typescript
public putTarget(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput">modelProviderServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderService">modelProviderService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.target"></a>

```typescript
public readonly target: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference</a>

---

##### `modelProviderServiceInput`<sup>Optional</sup> <a name="modelProviderServiceInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput"></a>

```typescript
public readonly modelProviderServiceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a>

---

##### `modelProviderService`<sup>Required</sup> <a name="modelProviderService" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderService"></a>

```typescript
public readonly modelProviderService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes">resetNativeApiTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNativeApiTypes` <a name="resetNativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes"></a>

```typescript
public resetNativeApiTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput">nativeApiTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes">nativeApiTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `nativeApiTypesInput`<sup>Optional</sup> <a name="nativeApiTypesInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput"></a>

```typescript
public readonly nativeApiTypesInput: string[];
```

- *Type:* string[]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `nativeApiTypes`<sup>Required</sup> <a name="nativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes"></a>

```typescript
public readonly nativeApiTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingDestinations</a>[]

---


### DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.putExternalModelConfig">putExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.putPayPerTokenConfig">putPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.putProvisionedThroughputConfig">putProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetExternalModelConfig">resetExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetPayPerTokenConfig">resetPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetProvisionedThroughputConfig">resetProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetTrafficPercentage">resetTrafficPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalModelConfig` <a name="putExternalModelConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.putExternalModelConfig"></a>

```typescript
public putExternalModelConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.putExternalModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a>

---

##### `putPayPerTokenConfig` <a name="putPayPerTokenConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.putPayPerTokenConfig"></a>

```typescript
public putPayPerTokenConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.putPayPerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a>

---

##### `putProvisionedThroughputConfig` <a name="putProvisionedThroughputConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.putProvisionedThroughputConfig"></a>

```typescript
public putProvisionedThroughputConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.putProvisionedThroughputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a>

---

##### `resetExternalModelConfig` <a name="resetExternalModelConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetExternalModelConfig"></a>

```typescript
public resetExternalModelConfig(): void
```

##### `resetPayPerTokenConfig` <a name="resetPayPerTokenConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetPayPerTokenConfig"></a>

```typescript
public resetPayPerTokenConfig(): void
```

##### `resetProvisionedThroughputConfig` <a name="resetProvisionedThroughputConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetProvisionedThroughputConfig"></a>

```typescript
public resetProvisionedThroughputConfig(): void
```

##### `resetTrafficPercentage` <a name="resetTrafficPercentage" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetTrafficPercentage"></a>

```typescript
public resetTrafficPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfig">externalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfig">payPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfig">provisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfigInput">externalModelConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfigInput">payPerTokenConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfigInput">provisionedThroughputConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentageInput">trafficPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalModelConfig`<sup>Required</sup> <a name="externalModelConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfig"></a>

```typescript
public readonly externalModelConfig: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference</a>

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `payPerTokenConfig`<sup>Required</sup> <a name="payPerTokenConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfig"></a>

```typescript
public readonly payPerTokenConfig: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference</a>

---

##### `provisionedThroughputConfig`<sup>Required</sup> <a name="provisionedThroughputConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfig"></a>

```typescript
public readonly provisionedThroughputConfig: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `externalModelConfigInput`<sup>Optional</sup> <a name="externalModelConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfigInput"></a>

```typescript
public readonly externalModelConfigInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `payPerTokenConfigInput`<sup>Optional</sup> <a name="payPerTokenConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfigInput"></a>

```typescript
public readonly payPerTokenConfigInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a>

---

##### `provisionedThroughputConfigInput`<sup>Optional</sup> <a name="provisionedThroughputConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfigInput"></a>

```typescript
public readonly provisionedThroughputConfigInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a>

---

##### `trafficPercentageInput`<sup>Optional</sup> <a name="trafficPercentageInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentageInput"></a>

```typescript
public readonly trafficPercentageInput: number;
```

- *Type:* number

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingDestinations</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput">modelServingEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint">modelServingEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `modelServingEndpointInput`<sup>Optional</sup> <a name="modelServingEndpointInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput"></a>

```typescript
public readonly modelServingEndpointInput: string;
```

- *Type:* string

---

##### `modelServingEndpoint`<sup>Required</sup> <a name="modelServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint"></a>

```typescript
public readonly modelServingEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.putTarget">putTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.putTarget"></a>

```typescript
public putTarget(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput">modelProviderServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderService">modelProviderService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.target"></a>

```typescript
public readonly target: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference</a>

---

##### `modelProviderServiceInput`<sup>Optional</sup> <a name="modelProviderServiceInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput"></a>

```typescript
public readonly modelProviderServiceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a>

---

##### `modelProviderService`<sup>Required</sup> <a name="modelProviderService" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderService"></a>

```typescript
public readonly modelProviderService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes">resetNativeApiTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNativeApiTypes` <a name="resetNativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes"></a>

```typescript
public resetNativeApiTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput">nativeApiTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes">nativeApiTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `nativeApiTypesInput`<sup>Optional</sup> <a name="nativeApiTypesInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput"></a>

```typescript
public readonly nativeApiTypesInput: string[];
```

- *Type:* string[]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `nativeApiTypes`<sup>Required</sup> <a name="nativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes"></a>

```typescript
public readonly nativeApiTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]

---


### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putExternalModelConfig">putExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putPayPerTokenConfig">putPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putProvisionedThroughputConfig">putProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetExternalModelConfig">resetExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetPayPerTokenConfig">resetPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetProvisionedThroughputConfig">resetProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetTrafficPercentage">resetTrafficPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalModelConfig` <a name="putExternalModelConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putExternalModelConfig"></a>

```typescript
public putExternalModelConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putExternalModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a>

---

##### `putPayPerTokenConfig` <a name="putPayPerTokenConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putPayPerTokenConfig"></a>

```typescript
public putPayPerTokenConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putPayPerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a>

---

##### `putProvisionedThroughputConfig` <a name="putProvisionedThroughputConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putProvisionedThroughputConfig"></a>

```typescript
public putProvisionedThroughputConfig(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putProvisionedThroughputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a>

---

##### `resetExternalModelConfig` <a name="resetExternalModelConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetExternalModelConfig"></a>

```typescript
public resetExternalModelConfig(): void
```

##### `resetPayPerTokenConfig` <a name="resetPayPerTokenConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetPayPerTokenConfig"></a>

```typescript
public resetPayPerTokenConfig(): void
```

##### `resetProvisionedThroughputConfig` <a name="resetProvisionedThroughputConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetProvisionedThroughputConfig"></a>

```typescript
public resetProvisionedThroughputConfig(): void
```

##### `resetTrafficPercentage` <a name="resetTrafficPercentage" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetTrafficPercentage"></a>

```typescript
public resetTrafficPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfig">externalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfig">payPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfig">provisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfigInput">externalModelConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfigInput">payPerTokenConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfigInput">provisionedThroughputConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentageInput">trafficPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentage">trafficPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalModelConfig`<sup>Required</sup> <a name="externalModelConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfig"></a>

```typescript
public readonly externalModelConfig: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference</a>

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `payPerTokenConfig`<sup>Required</sup> <a name="payPerTokenConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfig"></a>

```typescript
public readonly payPerTokenConfig: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference</a>

---

##### `provisionedThroughputConfig`<sup>Required</sup> <a name="provisionedThroughputConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfig"></a>

```typescript
public readonly provisionedThroughputConfig: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `externalModelConfigInput`<sup>Optional</sup> <a name="externalModelConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfigInput"></a>

```typescript
public readonly externalModelConfigInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `payPerTokenConfigInput`<sup>Optional</sup> <a name="payPerTokenConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfigInput"></a>

```typescript
public readonly payPerTokenConfigInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a>

---

##### `provisionedThroughputConfigInput`<sup>Optional</sup> <a name="provisionedThroughputConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfigInput"></a>

```typescript
public readonly provisionedThroughputConfigInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a>

---

##### `trafficPercentageInput`<sup>Optional</sup> <a name="trafficPercentageInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentageInput"></a>

```typescript
public readonly trafficPercentageInput: number;
```

- *Type:* number

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentage"></a>

```typescript
public readonly trafficPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput">modelServingEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint">modelServingEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `modelServingEndpointInput`<sup>Optional</sup> <a name="modelServingEndpointInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput"></a>

```typescript
public readonly modelServingEndpointInput: string;
```

- *Type:* string

---

##### `modelServingEndpoint`<sup>Required</sup> <a name="modelServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint"></a>

```typescript
public readonly modelServingEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback">DataDatabricksAiGatewayModelServiceConfigRoutingFallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackDestinations</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallback;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback">DataDatabricksAiGatewayModelServiceConfigRoutingFallback</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.putFallback">putFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.putTrafficSplitting">putTrafficSplitting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resetFallback">resetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resetFirstTokenTimeout">resetFirstTokenTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resetTrafficSplitting">resetTrafficSplitting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingDestinations</a>[]

---

##### `putFallback` <a name="putFallback" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.putFallback"></a>

```typescript
public putFallback(value: DataDatabricksAiGatewayModelServiceConfigRoutingFallback): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.putFallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback">DataDatabricksAiGatewayModelServiceConfigRoutingFallback</a>

---

##### `putTrafficSplitting` <a name="putTrafficSplitting" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.putTrafficSplitting"></a>

```typescript
public putTrafficSplitting(value: DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.putTrafficSplitting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting">DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting</a>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetFallback` <a name="resetFallback" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resetFallback"></a>

```typescript
public resetFallback(): void
```

##### `resetFirstTokenTimeout` <a name="resetFirstTokenTimeout" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resetFirstTokenTimeout"></a>

```typescript
public resetFirstTokenTimeout(): void
```

##### `resetTrafficSplitting` <a name="resetTrafficSplitting" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.resetTrafficSplitting"></a>

```typescript
public resetTrafficSplitting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplitting">trafficSplitting</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.fallbackInput">fallbackInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback">DataDatabricksAiGatewayModelServiceConfigRoutingFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeoutInput">firstTokenTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplittingInput">trafficSplittingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting">DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeout">firstTokenTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting">DataDatabricksAiGatewayModelServiceConfigRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList">DataDatabricksAiGatewayModelServiceConfigRoutingDestinationsList</a>

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.fallback"></a>

```typescript
public readonly fallback: DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingFallbackOutputReference</a>

---

##### `trafficSplitting`<sup>Required</sup> <a name="trafficSplitting" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplitting"></a>

```typescript
public readonly trafficSplitting: DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference">DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingDestinations">DataDatabricksAiGatewayModelServiceConfigRoutingDestinations</a>[]

---

##### `fallbackInput`<sup>Optional</sup> <a name="fallbackInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.fallbackInput"></a>

```typescript
public readonly fallbackInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingFallback;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingFallback">DataDatabricksAiGatewayModelServiceConfigRoutingFallback</a>

---

##### `firstTokenTimeoutInput`<sup>Optional</sup> <a name="firstTokenTimeoutInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeoutInput"></a>

```typescript
public readonly firstTokenTimeoutInput: string;
```

- *Type:* string

---

##### `trafficSplittingInput`<sup>Optional</sup> <a name="trafficSplittingInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplittingInput"></a>

```typescript
public readonly trafficSplittingInput: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting">DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting</a>

---

##### `firstTokenTimeout`<sup>Required</sup> <a name="firstTokenTimeout" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeout"></a>

```typescript
public readonly firstTokenTimeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRouting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRouting">DataDatabricksAiGatewayModelServiceConfigRouting</a>

---


### DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference <a name="DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting">DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting">DataDatabricksAiGatewayModelServiceConfigRoutingTrafficSplitting</a>

---


### DataDatabricksAiGatewayModelServiceProviderConfigOutputReference <a name="DataDatabricksAiGatewayModelServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayModelService } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig">DataDatabricksAiGatewayModelServiceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayModelServiceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelService.DataDatabricksAiGatewayModelServiceProviderConfig">DataDatabricksAiGatewayModelServiceProviderConfig</a>

---



